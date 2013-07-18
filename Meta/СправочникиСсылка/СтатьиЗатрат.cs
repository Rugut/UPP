
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
	public partial class СтатьиЗатрат:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f50a2648-6dd4-4dfc-91f4-d6c4dc194736");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011943.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.СтатьиЗатрат Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыЗатрат ВидЗатрат {get;set;}//Вид затрат
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СтатусыМатериальныхЗатратНаПроизводство СтатусМатериальныхЗатрат {get;set;}//Статус материальных затрат
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ХарактерЗатрат ХарактерЗатрат {get;set;}//Характер затрат
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыРасходовНУ ВидРасходовНУ {get;set;}//Вид расходов (НУ)
		
		public СтатьиЗатрат()
		{
		}
		
		public СтатьиЗатрат(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public СтатьиЗатрат(byte[] УникальныйИдентификатор,int Глубина)
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
					,_ParentIDRRef [Родитель]
					,_Folder [ЭтоГруппа]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1963RRef [ВидЗатрат]
					,_Fld1964RRef [СтатусМатериальныхЗатрат]
					,_Fld1965RRef [ХарактерЗатрат]
					,_Fld1966RRef [ВидРасходовНУ]
					From _Reference162(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  -- and _Folder = 0x01  ";
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
							Родитель = new V82.СправочникиСсылка.СтатьиЗатрат((byte[])Читалка.GetValue(4),Глубина+1);
							ЭтоГруппа = ((byte[])Читалка.GetValue(5))[0]==0;
							Код = Читалка.GetString(6);
							Наименование = Читалка.GetString(7);
							if(!ЭтоГруппа)
							{
								ВидЗатрат = V82.Перечисления/*Ссылка*/.ВидыЗатрат.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								СтатусМатериальныхЗатрат = V82.Перечисления/*Ссылка*/.СтатусыМатериальныхЗатратНаПроизводство.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
								ХарактерЗатрат = V82.Перечисления/*Ссылка*/.ХарактерЗатрат.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
								ВидРасходовНУ = V82.Перечисления/*Ссылка*/.ВидыРасходовНУ.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							}
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
		
		public V82.СправочникиОбъект.СтатьиЗатрат  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СтатьиЗатрат();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидЗатрат = ВидЗатрат;
			Объект.СтатусМатериальныхЗатрат = СтатусМатериальныхЗатрат;
			Объект.ХарактерЗатрат = ХарактерЗатрат;
			Объект.ВидРасходовНУ = ВидРасходовНУ;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.СтатьиЗатрат ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.СтатьиЗатрат)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.СтатьиЗатрат(УникальныйИдентификатор);
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