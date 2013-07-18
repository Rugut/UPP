
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВычетыНДФЛ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("66162784-3d30-4c15-8f2b-953a823b945c");
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
		public bool Предопределенный {get;set;}
		public string/*7*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public string/*(3)*/ КодДляОтчетности2007 {get;set;}//Код для отчетности 2007 г.
		public string/*(3)*/ КодДляОтчетности2008 {get;set;}//Код для отчетности 2008 г.
		public string/*(3)*/ КодДляОтчетности2009 {get;set;}//Код для отчетности 2009 г.
		public string/*(0)*/ Наименование2007 {get;set;}//Наименование 2007 г.
		public string/*(0)*/ Наименование2008 {get;set;}//Наименование 2008 г.
		public string/*(3)*/ КодДляОтчетности2010 {get;set;}//Код для отчетности 2010 г.
		public bool НеПредоставляетсяНерезидентам {get;set;}//Не предоставляется нерезидентам
		public bool НеОтражаетсяВОтчетности2010 {get;set;}//Не отражается в отчетности-2010
		public V82.Перечисления/*Ссылка*/.ГруппыВычетовПоНДФЛ ГруппаВычета {get;set;}//Группа вычета
		public string/*(0)*/ Наименование2010 {get;set;}//Наименование 2010 г.
		public string/*(3)*/ КодДляОтчетности2011 {get;set;}//Код для отчетности 2011 г.
		
		public ВычетыНДФЛ()
		{
		}
		
		public ВычетыНДФЛ(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ВычетыНДФЛ(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld26504 [КодДляОтчетности2007]
					,_Fld26505 [КодДляОтчетности2008]
					,_Fld26506 [КодДляОтчетности2009]
					,_Fld26507 [Наименование2007]
					,_Fld26508 [Наименование2008]
					,_Fld26509 [КодДляОтчетности2010]
					,_Fld26510 [НеПредоставляетсяНерезидентам]
					,_Fld26511 [НеОтражаетсяВОтчетности2010]
					,_Fld26512RRef [ГруппаВычета]
					,_Fld26513 [Наименование2010]
					,_Fld26514 [КодДляОтчетности2011]
					From _Reference34(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
								КодДляОтчетности2007 = Читалка.GetString(6);
								КодДляОтчетности2008 = Читалка.GetString(7);
								КодДляОтчетности2009 = Читалка.GetString(8);
								Наименование2007 = Читалка.GetString(9);
								Наименование2008 = Читалка.GetString(10);
								КодДляОтчетности2010 = Читалка.GetString(11);
								НеПредоставляетсяНерезидентам = ((byte[])Читалка.GetValue(12))[0]==1;
								НеОтражаетсяВОтчетности2010 = ((byte[])Читалка.GetValue(13))[0]==1;
								ГруппаВычета = V82.Перечисления/*Ссылка*/.ГруппыВычетовПоНДФЛ.ПустаяСсылка.Получить((byte[])Читалка.GetValue(14));
								Наименование2010 = Читалка.GetString(15);
								КодДляОтчетности2011 = Читалка.GetString(16);
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
		
		public V82.СправочникиОбъект.ВычетыНДФЛ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВычетыНДФЛ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КодДляОтчетности2007 = КодДляОтчетности2007;
			Объект.КодДляОтчетности2008 = КодДляОтчетности2008;
			Объект.КодДляОтчетности2009 = КодДляОтчетности2009;
			Объект.Наименование2007 = Наименование2007;
			Объект.Наименование2008 = Наименование2008;
			Объект.КодДляОтчетности2010 = КодДляОтчетности2010;
			Объект.НеПредоставляетсяНерезидентам = НеПредоставляетсяНерезидентам;
			Объект.НеОтражаетсяВОтчетности2010 = НеОтражаетсяВОтчетности2010;
			Объект.ГруппаВычета = ГруппаВычета;
			Объект.Наименование2010 = Наименование2010;
			Объект.КодДляОтчетности2011 = КодДляОтчетности2011;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ВычетыНДФЛ ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ВычетыНДФЛ)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ВычетыНДФЛ(УникальныйИдентификатор);
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