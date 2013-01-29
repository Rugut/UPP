
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ¬иды–абочих√рафиков
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///(ќбщ)
	///</summary>
		ѕ€тидневка = 0,
	///<summary>
	///(ќбщ)
	///</summary>
		Ўестидневка = 1,
	///<summary>
	///(ќбщ)
	///</summary>
		—менный = 2,
		 алендарныеƒни = 3,// алендарные дни
	}
	public static partial class ¬иды–абочих√рафиков_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ѕ€тидневка = new Guid("671c8caf-a687-8d2e-4ec2-c4fc4dba4830");
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid Ўестидневка = new Guid("4ea369bf-f0c8-6fd2-408a-ad0bc661367d");
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid —менный = new Guid("d0ee6e91-4282-5687-4cb6-8b88eaa213a4");
		public static readonly Guid  алендарныеƒни = new Guid("c1e92e8d-7b5f-8bdd-40ec-aa80c643ce52");// алендарные дни
		public static ¬иды–абочих√рафиков ѕолучить(this ¬иды–абочих√рафиков «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды–абочих√рафиков ѕолучить(this ¬иды–абочих√рафиков «начение, Guid —сылка)
		{
			if(—сылка == ѕ€тидневка)
			{
				return ¬иды–абочих√рафиков.ѕ€тидневка;
			}
			else if(—сылка == Ўестидневка)
			{
				return ¬иды–абочих√рафиков.Ўестидневка;
			}
			else if(—сылка == —менный)
			{
				return ¬иды–абочих√рафиков.—менный;
			}
			else if(—сылка ==  алендарныеƒни)
			{
				return ¬иды–абочих√рафиков. алендарныеƒни;
			}
			return ¬иды–абочих√рафиков.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды–абочих√рафиков «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды–абочих√рафиков «начение)
		{
			switch («начение)
			{
				case ¬иды–абочих√рафиков.ѕ€тидневка: return ѕ€тидневка;
				case ¬иды–абочих√рафиков.Ўестидневка: return Ўестидневка;
				case ¬иды–абочих√рафиков.—менный: return —менный;
				case ¬иды–абочих√рафиков. алендарныеƒни: return  алендарныеƒни;
			}
			return Guid.Empty;
		}
	}
}
