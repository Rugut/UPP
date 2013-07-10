
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
	public partial class ПодразделенияОрганизаций:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("216d90ff-d8c0-4976-94ae-f803a6162ede");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011955.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public Guid Родитель {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыПодразделений ВидПодразделения {get;set;}//Вид подразделения
		///<summary>
		///(Регл)
		///</summary>
		public string/*(11)*/ КодПоОКАТО {get;set;}//Код по ОКАТО
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПП {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(5.2)*/ РайонныйКоэффициент {get;set;}//Районный коэффициент
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(5.2)*/ РайонныйКоэффициентРФ {get;set;}//Районный коэффициент РФ
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ТерриториальныеУсловия ТерриториальныеУсловияПФР {get;set;}//Территориальные условия ПФР
		public decimal/*(6)*/ Порядок {get;set;}
		public bool СоответствуетСудамПодФлагомРФ {get;set;}//Соответствует судам под флагом РФ
		
		public ПодразделенияОрганизаций()
		{
		}
		
		public ПодразделенияОрганизаций(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ПодразделенияОрганизаций(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
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
							ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							КодПоОКАТО = Читалка.GetString(7);
							КПП = Читалка.GetString(8);
							РайонныйКоэффициент = Читалка.GetDecimal(9);
							РайонныйКоэффициентРФ = Читалка.GetDecimal(10);
							ТерриториальныеУсловияПФР = new V82.СправочникиСсылка.ТерриториальныеУсловия((byte[])Читалка.GetValue(11),Глубина+1);
							Порядок = Читалка.GetDecimal(12);
							СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(13))[0]==1;
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
		
		public V82.СправочникиОбъект.ПодразделенияОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПодразделенияОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидПодразделения = ВидПодразделения;
			Объект.КодПоОКАТО = КодПоОКАТО;
			Объект.КПП = КПП;
			Объект.РайонныйКоэффициент = РайонныйКоэффициент;
			Объект.РайонныйКоэффициентРФ = РайонныйКоэффициентРФ;
			Объект.ТерриториальныеУсловияПФР = ТерриториальныеУсловияПФР;
			Объект.Порядок = Порядок;
			Объект.СоответствуетСудамПодФлагомРФ = СоответствуетСудамПодФлагомРФ;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ПодразделенияОрганизаций ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ПодразделенияОрганизаций)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ПодразделенияОрганизаций(УникальныйИдентификатор);
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