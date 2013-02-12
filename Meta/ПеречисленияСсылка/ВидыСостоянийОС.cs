
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ВидыСостоянийОС
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		ПринятоКУчету = 0,//Принято к учету
	///<summary>
	///(Общ)
	///</summary>
		ВведеноВЭксплуатацию = 1,//Введено в эксплуатацию
	///<summary>
	///(Общ)
	///</summary>
		Модернизировано = 2,
	///<summary>
	///(Общ)
	///</summary>
		СнятоСУчета = 3,//Снято с учета
	///<summary>
	///(Общ)
	///</summary>
		Иное = 4,
	}
	public static partial class ВидыСостоянийОС_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПринятоКУчету = new Guid("0664b091-423b-50c0-48d8-20201e9a0d6a");//Принято к учету
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВведеноВЭксплуатацию = new Guid("8e1e9caa-c0a5-9b61-45ca-01e9f2e141b7");//Введено в эксплуатацию
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Модернизировано = new Guid("3f1958bb-18fb-48b8-4e30-0d14c28e4418");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid СнятоСУчета = new Guid("d368058a-8603-4615-45c2-a92177d49f31");//Снято с учета
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Иное = new Guid("a198db80-a691-9430-4d61-73a7717a0fc4");
		public static ВидыСостоянийОС Получить(this ВидыСостоянийОС Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСостоянийОС Получить(this ВидыСостоянийОС Значение, Guid Ссылка)
		{
			if(Ссылка == ПринятоКУчету)
			{
				return ВидыСостоянийОС.ПринятоКУчету;
			}
			else if(Ссылка == ВведеноВЭксплуатацию)
			{
				return ВидыСостоянийОС.ВведеноВЭксплуатацию;
			}
			else if(Ссылка == Модернизировано)
			{
				return ВидыСостоянийОС.Модернизировано;
			}
			else if(Ссылка == СнятоСУчета)
			{
				return ВидыСостоянийОС.СнятоСУчета;
			}
			else if(Ссылка == Иное)
			{
				return ВидыСостоянийОС.Иное;
			}
			return ВидыСостоянийОС.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСостоянийОС Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСостоянийОС Значение)
		{
			switch (Значение)
			{
				case ВидыСостоянийОС.ПринятоКУчету: return ПринятоКУчету;
				case ВидыСостоянийОС.ВведеноВЭксплуатацию: return ВведеноВЭксплуатацию;
				case ВидыСостоянийОС.Модернизировано: return Модернизировано;
				case ВидыСостоянийОС.СнятоСУчета: return СнятоСУчета;
				case ВидыСостоянийОС.Иное: return Иное;
			}
			return Guid.Empty;
		}
	}
}