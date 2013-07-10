
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОприходованиеНЗП:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("79149903-45a9-45b8-bd3e-80a87daa29b1");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012016.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыНормативнойСтоимостиПроизводства ТипСтоимости {get;set;}//Тип стоимости
		///<summary>
		///(Регл)
		///</summary>
		public object СчетКт {get;set;}//Счет кредита
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт1 {get;set;}//Субконто кредита 1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт2 {get;set;}//Субконто кредита 2
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт3 {get;set;}//Субконто кредита 3
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Регл)
		///</summary>
		public object СчетКтНУ {get;set;}//Счет кредита (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКтНУ1 {get;set;}//Субконто кредита 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКтНУ2 {get;set;}//Субконто кредита 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКтНУ3 {get;set;}//Субконто кредита 3 (налоговый учет)
		public V82.ДокументыСсылка.ИнвентаризацияНЗП ДокИнвентаризация {get;set;}//Документ инвентаризации
		
		public ОприходованиеНЗП()
		{
		}
		
		public ОприходованиеНЗП(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld6839 [ОтражатьВУправленческомУчете]
					,_Fld6840 [ОтражатьВБухгалтерскомУчете]
					,_Fld6841 [ОтражатьВНалоговомУчете]
					,_Fld6842RRef [Организация]
					,_Fld6843RRef [Подразделение]
					,_Fld6844 [Комментарий]
					,_Fld6845RRef [Ответственный]
					,_Fld6846RRef [ТипСтоимости]
					,_Fld6847RRef [СчетКт]
					,_Fld6848RRef [СубконтоКт1]
					,_Fld6849RRef [СубконтоКт2]
					,_Fld6850RRef [СубконтоКт3]
					,_Fld6851RRef [ПодразделениеОрганизации]
					,_Fld6852RRef [СчетКтНУ]
					,_Fld6853RRef [СубконтоКтНУ1]
					,_Fld6854RRef [СубконтоКтНУ2]
					,_Fld6855RRef [СубконтоКтНУ3]
					,_Fld6856RRef [ДокИнвентаризация]
					From _Document341(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(4))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Комментарий = Читалка.GetString(9);
							ТипСтоимости = V82.Перечисления/*Ссылка*/.ВидыНормативнойСтоимостиПроизводства.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							ДокИнвентаризация = new V82.ДокументыСсылка.ИнвентаризацияНЗП((byte[])Читалка.GetValue(21));
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.ОприходованиеНЗП  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ОприходованиеНЗП();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.Организация = Организация;
			Объект.Подразделение = Подразделение;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ТипСтоимости = ТипСтоимости;
			Объект.СчетКт = СчетКт;
			Объект.СубконтоКт1 = СубконтоКт1;
			Объект.СубконтоКт2 = СубконтоКт2;
			Объект.СубконтоКт3 = СубконтоКт3;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.СчетКтНУ = СчетКтНУ;
			Объект.СубконтоКтНУ1 = СубконтоКтНУ1;
			Объект.СубконтоКтНУ2 = СубконтоКтНУ2;
			Объект.СубконтоКтНУ3 = СубконтоКтНУ3;
			Объект.ДокИнвентаризация = ДокИнвентаризация;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ОприходованиеНЗП ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ОприходованиеНЗП)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ОприходованиеНЗП(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}