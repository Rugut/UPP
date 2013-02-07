
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ЮрФизЛицо
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		ЮрЛицо = 0,
	///<summary>
	///(Общ)
	///</summary>
		ФизЛицо = 1,
	}
	public static partial class ЮрФизЛицо_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ЮрЛицо = new Guid("6d7a91b3-8ec0-f6a0-4f59-c4deeef13a4c");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ФизЛицо = new Guid("b8b93ea1-82fc-86a2-4720-bafad2cff47a");
		public static ЮрФизЛицо Получить(this ЮрФизЛицо Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ЮрФизЛицо Получить(this ЮрФизЛицо Значение, Guid Ссылка)
		{
			if(Ссылка == ЮрЛицо)
			{
				return ЮрФизЛицо.ЮрЛицо;
			}
			else if(Ссылка == ФизЛицо)
			{
				return ЮрФизЛицо.ФизЛицо;
			}
			return ЮрФизЛицо.ПустаяСсылка;
		}
		public static byte[] Ключ(this ЮрФизЛицо Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ЮрФизЛицо Значение)
		{
			switch (Значение)
			{
				case ЮрФизЛицо.ЮрЛицо: return ЮрЛицо;
				case ЮрФизЛицо.ФизЛицо: return ФизЛицо;
			}
			return Guid.Empty;
		}
	}
}