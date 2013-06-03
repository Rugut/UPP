
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
	public partial class СписаниеНЗП:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("5519f5f5-4bc8-4a43-becd-8b81a2ef9dd3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191706.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public object СчетДт {get;set;}//Счет дебета
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДт1 {get;set;}//Субконто дебета 1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДт2 {get;set;}//Субконто дебета 2
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДт3 {get;set;}//Субконто дебета 3
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Регл)
		///</summary>
		public object СчетДтНУ {get;set;}//Счет дебета (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДтНУ1 {get;set;}//Субконто дебета 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДтНУ2 {get;set;}//Субконто дебета 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоДтНУ3 {get;set;}//Субконто дебета 3 (налоговый учет)
		public V82.ДокументыСсылка.ИнвентаризацияНЗП ДокИнвентаризация {get;set;}//Документ инвентаризации
		
		public СписаниеНЗП()
		{
		}
		
		public СписаниеНЗП(byte[] УникальныйИдентификатор)
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
					,_Fld17327 [ОтражатьВУправленческомУчете]
					,_Fld17328 [ОтражатьВБухгалтерскомУчете]
					,_Fld17329 [ОтражатьВНалоговомУчете]
					,_Fld17330RRef [Организация]
					,_Fld17331RRef [Подразделение]
					,_Fld17332 [Комментарий]
					,_Fld17333RRef [Ответственный]
					,_Fld17334RRef [ТипСтоимости]
					,_Fld17335RRef [СчетДт]
					,_Fld17336RRef [СубконтоДт1]
					,_Fld17337RRef [СубконтоДт2]
					,_Fld17338RRef [СубконтоДт3]
					,_Fld17339RRef [ПодразделениеОрганизации]
					,_Fld17340RRef [СчетДтНУ]
					,_Fld17341RRef [СубконтоДтНУ1]
					,_Fld17342RRef [СубконтоДтНУ2]
					,_Fld17343RRef [СубконтоДтНУ3]
					,_Fld17344RRef [ДокИнвентаризация]
					From _Document593(NOLOCK)
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
		
		public V82.ДокументыОбъект.СписаниеНЗП  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СписаниеНЗП();
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
			Объект.СчетДт = СчетДт;
			Объект.СубконтоДт1 = СубконтоДт1;
			Объект.СубконтоДт2 = СубконтоДт2;
			Объект.СубконтоДт3 = СубконтоДт3;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.СчетДтНУ = СчетДтНУ;
			Объект.СубконтоДтНУ1 = СубконтоДтНУ1;
			Объект.СубконтоДтНУ2 = СубконтоДтНУ2;
			Объект.СубконтоДтНУ3 = СубконтоДтНУ3;
			Объект.ДокИнвентаризация = ДокИнвентаризация;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СписаниеНЗП ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СписаниеНЗП)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СписаниеНЗП(УникальныйИдентификатор);
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