
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкаНаОткрытиеСчетов:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("983e4bc8-c997-40f1-9777-e2a6c1082587");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012001.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчет {get;set;}//Банковский счет
		public string/*(0)*/ ТекстПодтверждения {get;set;}//Текст подтверждения
		public string/*(20)*/ НомерДоговора {get;set;}//Номер договора
		public string/*(4)*/ ОтделениеБанка {get;set;}//Отделение банка
		public string/*(4)*/ ФилиалОтделенияБанка {get;set;}//Филиал отделения банка
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(0)*/ ВидВклада {get;set;}//Вид вклада
		public V82.СправочникиСсылка.Контрагенты Банк {get;set;}
		public bool ВводНачальныхСведений {get;set;}//Ввод начальных сведений
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public decimal/*(2)*/ ДатаВыплатыЗаработнойПлаты {get;set;}//Дата выплаты заработной платы
		
		public ЗаявкаНаОткрытиеСчетов()
		{
		}
		
		public ЗаявкаНаОткрытиеСчетов(byte[] УникальныйИдентификатор)
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
					,_Fld4714RRef [Организация]
					,_Fld4715RRef [Ответственный]
					,_Fld4716RRef [БанковскийСчет]
					,_Fld4717 [ТекстПодтверждения]
					,_Fld4718 [НомерДоговора]
					,_Fld4719 [ОтделениеБанка]
					,_Fld4720 [ФилиалОтделенияБанка]
					,_Fld4721RRef [Валюта]
					,_Fld4722 [Комментарий]
					,_Fld4723 [ВидВклада]
					,_Fld4724RRef [Банк]
					,_Fld4725 [ВводНачальныхСведений]
					,_Fld21440 [КраткийСоставДокумента]
					,_Fld26740 [ДатаВыплатыЗаработнойПлаты]
					From _Document270(NOLOCK)
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
							ТекстПодтверждения = Читалка.GetString(7);
							НомерДоговора = Читалка.GetString(8);
							ОтделениеБанка = Читалка.GetString(9);
							ФилиалОтделенияБанка = Читалка.GetString(10);
							Комментарий = Читалка.GetString(12);
							ВидВклада = Читалка.GetString(13);
							ВводНачальныхСведений = ((byte[])Читалка.GetValue(15))[0]==1;
							КраткийСоставДокумента = Читалка.GetString(16);
							ДатаВыплатыЗаработнойПлаты = Читалка.GetDecimal(17);
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
		
		public V82.ДокументыОбъект.ЗаявкаНаОткрытиеСчетов  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗаявкаНаОткрытиеСчетов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.БанковскийСчет = БанковскийСчет;
			Объект.ТекстПодтверждения = ТекстПодтверждения;
			Объект.НомерДоговора = НомерДоговора;
			Объект.ОтделениеБанка = ОтделениеБанка;
			Объект.ФилиалОтделенияБанка = ФилиалОтделенияБанка;
			Объект.Валюта = Валюта;
			Объект.Комментарий = Комментарий;
			Объект.ВидВклада = ВидВклада;
			Объект.Банк = Банк;
			Объект.ВводНачальныхСведений = ВводНачальныхСведений;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ДатаВыплатыЗаработнойПлаты = ДатаВыплатыЗаработнойПлаты;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗаявкаНаОткрытиеСчетов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗаявкаНаОткрытиеСчетов)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗаявкаНаОткрытиеСчетов(УникальныйИдентификатор);
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