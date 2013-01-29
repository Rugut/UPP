
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ПорядкиОкругленияЕСН
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		Точно = 0,//С максимальной точностью
	///<summary>
	///(Общ)
	///</summary>
		ВРублях = 1,//В рублях
	///<summary>
	///(Общ)
	///</summary>
		ВРубляхИКопейках = 2,//В рублях и копейках
	}
	public static partial class ПорядкиОкругленияЕСН_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Точно = new Guid("1aff739b-a0f3-1350-4639-e0c4423da236");//С максимальной точностью
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВРублях = new Guid("a1e643ba-160d-44f5-4dd1-d0c9821934dc");//В рублях
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВРубляхИКопейках = new Guid("4d236180-5f30-babd-4832-c535eec4a2d2");//В рублях и копейках
		public static ПорядкиОкругленияЕСН Получить(this ПорядкиОкругленияЕСН Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПорядкиОкругленияЕСН Получить(this ПорядкиОкругленияЕСН Значение, Guid Ссылка)
		{
			if(Ссылка == Точно)
			{
				return ПорядкиОкругленияЕСН.Точно;
			}
			else if(Ссылка == ВРублях)
			{
				return ПорядкиОкругленияЕСН.ВРублях;
			}
			else if(Ссылка == ВРубляхИКопейках)
			{
				return ПорядкиОкругленияЕСН.ВРубляхИКопейках;
			}
			return ПорядкиОкругленияЕСН.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПорядкиОкругленияЕСН Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПорядкиОкругленияЕСН Значение)
		{
			switch (Значение)
			{
				case ПорядкиОкругленияЕСН.Точно: return Точно;
				case ПорядкиОкругленияЕСН.ВРублях: return ВРублях;
				case ПорядкиОкругленияЕСН.ВРубляхИКопейках: return ВРубляхИКопейках;
			}
			return Guid.Empty;
		}
	}
}
