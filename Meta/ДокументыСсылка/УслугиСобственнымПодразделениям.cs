
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
	[ProtoContract]
	[DataContract]
	public partial class УслугиСобственнымПодразделениям:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("594d3679-b2a0-41de-b416-7743dbce01d0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191207.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}//Услуга (работа)
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		public object СчетЗатрат {get;set;}//Счет (БУ)
		public object СчетЗатратНУ {get;set;}//Счет (НУ)
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(0)*/ Комментарий {get;set;}
		
		public УслугиСобственнымПодразделениям()
		{
		}
		
		public УслугиСобственнымПодразделениям(byte[] УникальныйИдентификатор)
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
					,_Fld18489RRef [Организация]
					,_Fld18490RRef [Номенклатура]
					,_Fld18491RRef [НоменклатурнаяГруппа]
					,_Fld18492RRef [Подразделение]
					,_Fld18493 [ОтражатьВУправленческомУчете]
					,_Fld18494 [ОтражатьВБухгалтерскомУчете]
					,_Fld18495 [ОтражатьВНалоговомУчете]
					,_Fld18496RRef [ПодразделениеОрганизации]
					,_Fld18497RRef [СчетЗатрат]
					,_Fld18498RRef [СчетЗатратНУ]
					,_Fld18499RRef [Проект]
					,_Fld18500RRef [Ответственный]
					,_Fld18501 [Комментарий]
					From _Document617(NOLOCK)
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
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(10))[0]==1;
							Комментарий = Читалка.GetString(16);
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
		
		public V82.ДокументыОбъект.УслугиСобственнымПодразделениям  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.УслугиСобственнымПодразделениям();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Номенклатура = Номенклатура;
			Объект.НоменклатурнаяГруппа = НоменклатурнаяГруппа;
			Объект.Подразделение = Подразделение;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.СчетЗатрат = СчетЗатрат;
			Объект.СчетЗатратНУ = СчетЗатратНУ;
			Объект.Проект = Проект;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.УслугиСобственнымПодразделениям ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.УслугиСобственнымПодразделениям)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.УслугиСобственнымПодразделениям(УникальныйИдентификатор);
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