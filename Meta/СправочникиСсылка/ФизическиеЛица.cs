
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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ФизическиеЛица:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("37da5337-6ed4-44c5-9da2-d62e588c2698");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012018.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*10*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаРождения {get;set;}//Дата рождения
		///<summary>
		///(Регл)
		///</summary>
		public string/*(12)*/ ИНН {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public string/*(4)*/ КодИМНС {get;set;}//Код ИФНС
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(240)*/ МестоРождения {get;set;}//Место рождения
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ХранилищеДополнительнойИнформации ОсновноеИзображение {get;set;}//Основное изображение
		///<summary>
		///(Регл)
		///</summary>
		public string/*(11)*/ МестоРожденияКодПоОКАТО {get;set;}//Место рождения - код по ОКАТО
		public V82.СправочникиСсылка.ГруппыДоступаФизическихЛиц ГруппаДоступаФизическогоЛица {get;set;}//Группа доступа физического лица
		public V82.Перечисления/*Ссылка*/.ВидыЛьготПриНачисленииБольничных ЛьготаПриНачисленииПособий {get;set;}//Льгота при начислении пособий
		public bool ИмеетНаучныеТруды {get;set;}//Имеет научные труды
		public bool ИмеетИзобретения {get;set;}//Имеет изобретения
		
		public ФизическиеЛица()
		{
		}
		
		public ФизическиеЛица(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ФизическиеЛица(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2197 [ДатаРождения]
					,_Fld2198 [ИНН]
					,_Fld2199 [КодИМНС]
					,_Fld2200 [Комментарий]
					,_Fld2201 [СтраховойНомерПФР]
					,_Fld2202RRef [Пол]
					,_Fld2203 [МестоРождения]
					,_Fld2204RRef [ОсновноеИзображение]
					,_Fld2205 [МестоРожденияКодПоОКАТО]
					,_Fld21297RRef [ГруппаДоступаФизическогоЛица]
					,_Fld26650RRef [ЛьготаПриНачисленииПособий]
					,_Fld26651 [ИмеетНаучныеТруды]
					,_Fld26652 [ИмеетИзобретения]
					From _Reference190(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  and _Folder = 0x01  ";
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							ДатаРождения = Читалка.GetDateTime(6);
							ИНН = Читалка.GetString(7);
							КодИМНС = Читалка.GetString(8);
							Комментарий = Читалка.GetString(9);
							СтраховойНомерПФР = Читалка.GetString(10);
							Пол = V82.Перечисления/*Ссылка*/.ПолФизическихЛиц.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							МестоРождения = Читалка.GetString(12);
							ОсновноеИзображение = new V82.СправочникиСсылка.ХранилищеДополнительнойИнформации((byte[])Читалка.GetValue(13),Глубина+1);
							МестоРожденияКодПоОКАТО = Читалка.GetString(14);
							ГруппаДоступаФизическогоЛица = new V82.СправочникиСсылка.ГруппыДоступаФизическихЛиц((byte[])Читалка.GetValue(15),Глубина+1);
							ЛьготаПриНачисленииПособий = V82.Перечисления/*Ссылка*/.ВидыЛьготПриНачисленииБольничных.ПустаяСсылка.Получить((byte[])Читалка.GetValue(16));
							ИмеетНаучныеТруды = ((byte[])Читалка.GetValue(17))[0]==1;
							ИмеетИзобретения = ((byte[])Читалка.GetValue(18))[0]==1;
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
		
		public V82.СправочникиОбъект.ФизическиеЛица  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ФизическиеЛица();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ДатаРождения = ДатаРождения;
			Объект.ИНН = ИНН;
			Объект.КодИМНС = КодИМНС;
			Объект.Комментарий = Комментарий;
			Объект.СтраховойНомерПФР = СтраховойНомерПФР;
			Объект.Пол = Пол;
			Объект.МестоРождения = МестоРождения;
			Объект.ОсновноеИзображение = ОсновноеИзображение;
			Объект.МестоРожденияКодПоОКАТО = МестоРожденияКодПоОКАТО;
			Объект.ГруппаДоступаФизическогоЛица = ГруппаДоступаФизическогоЛица;
			Объект.ЛьготаПриНачисленииПособий = ЛьготаПриНачисленииПособий;
			Объект.ИмеетНаучныеТруды = ИмеетНаучныеТруды;
			Объект.ИмеетИзобретения = ИмеетИзобретения;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ФизическиеЛица ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ФизическиеЛица)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ФизическиеЛица(УникальныйИдентификатор);
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