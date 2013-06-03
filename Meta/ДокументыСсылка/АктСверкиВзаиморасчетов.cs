
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
	public partial class АктСверкиВзаиморасчетов:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("ea12bd15-8be3-45b9-8675-f9f67f3915ae");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191911.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		public object Сделка {get;set;}
		public DateTime ДатаНачала {get;set;}//Дата начала
		public DateTime ДатаОкончания {get;set;}//Дата окончания
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ФизическиеЛица ПредставительОрганизации {get;set;}//Представитель организации
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов ПредставительКонтрагента {get;set;}//Представитель контрагента
		///<summary>
		///(Общ) Остаток на начало 
		///</summary>
		public decimal/*(15.2)*/ ОстатокНаНачало {get;set;}//Остаток на начало
		///<summary>
		///(Общ) Остаток на конец
		///</summary>
		public decimal/*(15.2)*/ Расхождение {get;set;}
		///<summary>
		///Признак согласования сверки
		///</summary>
		public bool СверкаСогласована {get;set;}//Сверка согласована
		
		public АктСверкиВзаиморасчетов()
		{
		}
		
		public АктСверкиВзаиморасчетов(byte[] УникальныйИдентификатор)
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
					,_Fld4828RRef [Организация]
					,_Fld4829RRef [Контрагент]
					,_Fld4830RRef [ДоговорКонтрагента]
					,_Fld4831_TYPE [Сделка_Тип],_Fld4831_RRRef [Сделка],_Fld4831_RTRef [Сделка_Вид]
					,_Fld4832 [ДатаНачала]
					,_Fld4833 [ДатаОкончания]
					,_Fld4834 [Комментарий]
					,_Fld4835RRef [Ответственный]
					,_Fld4836RRef [ВалютаДокумента]
					,_Fld4837RRef [ПредставительОрганизации]
					,_Fld4838RRef [ПредставительКонтрагента]
					,_Fld4839 [ОстатокНаНачало]
					,_Fld4840 [Расхождение]
					,_Fld4841 [СверкаСогласована]
					From _Document303(NOLOCK)
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
							ДатаНачала = Читалка.GetDateTime(10);
							ДатаОкончания = Читалка.GetDateTime(11);
							Комментарий = Читалка.GetString(12);
							ОстатокНаНачало = Читалка.GetDecimal(17);
							Расхождение = Читалка.GetDecimal(18);
							СверкаСогласована = ((byte[])Читалка.GetValue(19))[0]==1;
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
		
		public V82.ДокументыОбъект.АктСверкиВзаиморасчетов  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.АктСверкиВзаиморасчетов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Контрагент = Контрагент;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Сделка = Сделка;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ПредставительОрганизации = ПредставительОрганизации;
			Объект.ПредставительКонтрагента = ПредставительКонтрагента;
			Объект.ОстатокНаНачало = ОстатокНаНачало;
			Объект.Расхождение = Расхождение;
			Объект.СверкаСогласована = СверкаСогласована;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.АктСверкиВзаиморасчетов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.АктСверкиВзаиморасчетов)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.АктСверкиВзаиморасчетов(УникальныйИдентификатор);
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