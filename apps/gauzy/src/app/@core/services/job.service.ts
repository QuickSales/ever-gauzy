import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {
	IGetEmployeeJobPostInput,
	IEmployeeJobPost,
	Pagination,
	IUpdateEmployeeJobPostAppliedResult,
	IApplyJobPostInput,
	IVisibilityJobPostInput
} from '@gauzy/models';
import { toParams } from '@gauzy/utils';

@Injectable({
	providedIn: 'root'
})
export class JobService {
	constructor(private http: HttpClient) {}

	getJobs(request?: IGetEmployeeJobPostInput) {
		return this.http
			.get<Pagination<IEmployeeJobPost>>(`/api/employee-job`, {
				params: request ? toParams(request) : {}
			})
			.pipe(first())
			.toPromise();
	}

	hideJob(data: IEmployeeJobPost) {
		const request: IVisibilityJobPostInput = {
			hide: true,
			employeeId: data.employeeId,
			providerCode: data.jobPost.providerCode,
			providerJobId: data.jobPost.providerJobId
		};
		return this.http
			.post<boolean>(`/api/employee-job/hide`, request)
			.pipe(first())
			.toPromise();
	}

	applyJob(data: IEmployeeJobPost) {
		const request: IApplyJobPostInput = {
			applied: true,
			employeeId: data.employeeId,
			providerCode: data.jobPost.providerCode,
			providerJobId: data.jobPost.providerJobId
		};
		return this.http
			.post<IUpdateEmployeeJobPostAppliedResult>(
				`/api/employee-job/applied`,
				request
			)
			.pipe(first())
			.toPromise();
	}
}
