
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
	public partial class ЗапросВПФРОЗаработкеСотрудника:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d6c2af93-a6d1-444c-9dfd-2f4b638a14fb");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012020.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Работодатели Страхователь {get;set;}
		public decimal/*(4)*/ ГодС {get;set;}//Год С
		public decimal/*(4)*/ ГодПо {get;set;}//Год по
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		public string/*(100)*/ НаименованиеТерриториальногоОрганаПФР {get;set;}//Наименование территориального органа ПФР
		public string/*(240)*/ АдресОрганизации {get;set;}//Адрес организации
		public string/*(240)*/ ТелефонОрганизации {get;set;}//Телефон организации
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаРождения {get;set;}//Дата рождения
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
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ВидДокумента {get;set;}//Вид документа
		public string/*(14)*/ СерияДокумента {get;set;}//Серия документа
		public string/*(14)*/ НомерДокумента {get;set;}//Номер документа
		public DateTime ДатаВыдачиДокумента {get;set;}//Дата выдачи документа
		public string/*(0)*/ КемВыданДокумент {get;set;}//Кем выдан документ
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public ЗапросВПФРОЗаработкеСотрудника()
		{
		}
		
		public ЗапросВПФРОЗаработкеСотрудника(byte[] УникальныйИдентификатор)
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
					,_Fld24144RRef [Организация]
					,_Fld24145RRef [Сотрудник]
					,_Fld24146RRef [ФизЛицо]
					,_Fld24147RRef [Страхователь]
					,_Fld24148 [ГодС]
					,_Fld24149 [ГодПо]
					,_Fld24150RRef [Руководитель]
					,_Fld24151RRef [ДолжностьРуководителя]
					,_Fld24152 [НаименованиеТерриториальногоОрганаПФР]
					,_Fld24153 [АдресОрганизации]
					,_Fld24154 [ТелефонОрганизации]
					,_Fld24155 [СтраховойНомерПФР]
					,_Fld24156 [ДатаРождения]
					,_Fld24157 [Фамилия]
					,_Fld24158 [Имя]
					,_Fld24159 [Отчество]
					,_Fld24160 [Адрес]
					,_Fld24161RRef [ВидДокумента]
					,_Fld24162 [СерияДокумента]
					,_Fld24163 [НомерДокумента]
					,_Fld24164 [ДатаВыдачиДокумента]
					,_Fld24165 [КемВыданДокумент]
					,_Fld24166 [Комментарий]
					,_Fld24167RRef [Ответственный]
					From _Document23143(NOLOCK)
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
							ГодС = Читалка.GetDecimal(8);
							ГодПо = Читалка.GetDecimal(9);
							НаименованиеТерриториальногоОрганаПФР = Читалка.GetString(12);
							АдресОрганизации = Читалка.GetString(13);
							ТелефонОрганизации = Читалка.GetString(14);
							СтраховойНомерПФР = Читалка.GetString(15);
							ДатаРождения = Читалка.GetDateTime(16);
							Фамилия = Читалка.GetString(17);
							Имя = Читалка.GetString(18);
							Отчество = Читалка.GetString(19);
							Адрес = Читалка.GetString(20);
							СерияДокумента = Читалка.GetString(22);
							НомерДокумента = Читалка.GetString(23);
							ДатаВыдачиДокумента = Читалка.GetDateTime(24);
							КемВыданДокумент = Читалка.GetString(25);
							Комментарий = Читалка.GetString(26);
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
		
		public V82.ДокументыОбъект.ЗапросВПФРОЗаработкеСотрудника  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗапросВПФРОЗаработкеСотрудника();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Сотрудник = Сотрудник;
			Объект.ФизЛицо = ФизЛицо;
			Объект.Страхователь = Страхователь;
			Объект.ГодС = ГодС;
			Объект.ГодПо = ГодПо;
			Объект.Руководитель = Руководитель;
			Объект.ДолжностьРуководителя = ДолжностьРуководителя;
			Объект.НаименованиеТерриториальногоОрганаПФР = НаименованиеТерриториальногоОрганаПФР;
			Объект.АдресОрганизации = АдресОрганизации;
			Объект.ТелефонОрганизации = ТелефонОрганизации;
			Объект.СтраховойНомерПФР = СтраховойНомерПФР;
			Объект.ДатаРождения = ДатаРождения;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.Отчество = Отчество;
			Объект.Адрес = Адрес;
			Объект.ВидДокумента = ВидДокумента;
			Объект.СерияДокумента = СерияДокумента;
			Объект.НомерДокумента = НомерДокумента;
			Объект.ДатаВыдачиДокумента = ДатаВыдачиДокумента;
			Объект.КемВыданДокумент = КемВыданДокумент;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗапросВПФРОЗаработкеСотрудника ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗапросВПФРОЗаработкеСотрудника)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗапросВПФРОЗаработкеСотрудника(УникальныйИдентификатор);
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