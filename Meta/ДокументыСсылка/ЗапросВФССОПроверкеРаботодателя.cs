
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
	public partial class ЗапросВФССОПроверкеРаботодателя:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("84c143c6-22e4-45f4-9121-c879a27f7912");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191800.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		public V82.Перечисления/*Ссылка*/.ВидыПособийСоциальногоСтрахования ВидПособия {get;set;}//Вид пособия
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		public string/*(240)*/ АдресОрганизации {get;set;}//Адрес организации
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Фамилия {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Имя {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Отчество {get;set;}
		public string/*(240)*/ Адрес {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public ЗапросВФССОПроверкеРаботодателя()
		{
		}
		
		public ЗапросВФССОПроверкеРаботодателя(byte[] УникальныйИдентификатор)
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
					,_Fld7376RRef [Организация]
					,_Fld7377RRef [Сотрудник]
					,_Fld7378RRef [ФизЛицо]
					,_Fld7379RRef [ВидПособия]
					,_Fld7380RRef [Руководитель]
					,_Fld7381RRef [ДолжностьРуководителя]
					,_Fld7382 [РегистрационныйНомерФСС]
					,_Fld7383 [ДополнительныйКодФСС]
					,_Fld7384 [КодПодчиненностиФСС]
					,_Fld7385 [НаименованиеТерриториальногоОрганаФСС]
					,_Fld7386 [АдресОрганизации]
					,_Fld7387 [СтраховойНомерПФР]
					,_Fld7388 [Фамилия]
					,_Fld7389 [Имя]
					,_Fld7390 [Отчество]
					,_Fld7391 [Адрес]
					,_Fld7392 [Комментарий]
					,_Fld7393RRef [Ответственный]
					From _Document374(NOLOCK)
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
							ВидПособия = V82.Перечисления/*Ссылка*/.ВидыПособийСоциальногоСтрахования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							РегистрационныйНомерФСС = Читалка.GetString(10);
							ДополнительныйКодФСС = Читалка.GetString(11);
							КодПодчиненностиФСС = Читалка.GetString(12);
							НаименованиеТерриториальногоОрганаФСС = Читалка.GetString(13);
							АдресОрганизации = Читалка.GetString(14);
							СтраховойНомерПФР = Читалка.GetString(15);
							Фамилия = Читалка.GetString(16);
							Имя = Читалка.GetString(17);
							Отчество = Читалка.GetString(18);
							Адрес = Читалка.GetString(19);
							Комментарий = Читалка.GetString(20);
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
		
		public V82.ДокументыОбъект.ЗапросВФССОПроверкеРаботодателя  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗапросВФССОПроверкеРаботодателя();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Сотрудник = Сотрудник;
			Объект.ФизЛицо = ФизЛицо;
			Объект.ВидПособия = ВидПособия;
			Объект.Руководитель = Руководитель;
			Объект.ДолжностьРуководителя = ДолжностьРуководителя;
			Объект.РегистрационныйНомерФСС = РегистрационныйНомерФСС;
			Объект.ДополнительныйКодФСС = ДополнительныйКодФСС;
			Объект.КодПодчиненностиФСС = КодПодчиненностиФСС;
			Объект.НаименованиеТерриториальногоОрганаФСС = НаименованиеТерриториальногоОрганаФСС;
			Объект.АдресОрганизации = АдресОрганизации;
			Объект.СтраховойНомерПФР = СтраховойНомерПФР;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.Отчество = Отчество;
			Объект.Адрес = Адрес;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗапросВФССОПроверкеРаботодателя ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗапросВФССОПроверкеРаботодателя)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗапросВФССОПроверкеРаботодателя(УникальныйИдентификатор);
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