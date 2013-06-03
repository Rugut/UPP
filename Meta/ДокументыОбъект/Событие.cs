
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Событие:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(300)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовСобытия ВидОбъекта {get;set;}//Вид объекта
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыСобытий ВидСобытия {get;set;}//Вид события
		[DataMember]
		[ProtoMember(13)]
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ИсточникиИнформацииПриОбращенииПокупателей ИсточникИнформацииПриОбращении {get;set;}//Источник информации при обращении
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public object КонтактноеЛицо {get;set;}//Контактное лицо
		[DataMember]
		[ProtoMember(17)]
		public object Контрагент {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		[DataMember]
		[ProtoMember(19)]
		public DateTime НачалоСобытия {get;set;}//Начало события
		[DataMember]
		[ProtoMember(20)]
		public DateTime ОкончаниеСобытия {get;set;}//Окончание события
		[DataMember]
		[ProtoMember(21)]
		public string/*(200)*/ ОписаниеСобытия {get;set;}//Описание события
		[DataMember]
		[ProtoMember(22)]
		public object Основание {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Помещения Помещение {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(0)*/ СодержаниеСобытия {get;set;}//Содержание события
		[DataMember]
		[ProtoMember(27)]
		public V82.Перечисления/*Ссылка*/.СостоянияСобытий СостояниеСобытия {get;set;}//Состояние события
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Территории Территория {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.Перечисления/*Ссылка*/.ВходящееИсходящееСобытие ТипСобытия {get;set;}//Тип события
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ГруппыСобытий ГруппаСобытия {get;set;}//Группа события
		[DataMember]
		[ProtoMember(31)]
		public bool ЕстьВложения {get;set;}//Есть вложения
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.КонтактныеЛица КонтактноеЛицоБезКонтрагента {get;set;}//Контактное лицо
		[DataMember]
		[ProtoMember(33)]
		public decimal/*(10)*/ ИнтервалНапоминания {get;set;}//Интервал напоминания
		[DataMember]
		[ProtoMember(34)]
		public string/*(50)*/ ПредметКонтакта {get;set;}//Предмет
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.ЗаявкиКандидатов ЗаявкаКандидата {get;set;}//Заявка кандидата
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document588(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17181
						,_Fld17182RRef
						,_Fld17183RRef
						,_Fld17184RRef
						,_Fld17185
						,_Fld17186RRef
						,_Fld17187
						,_Fld17190
						,_Fld17191
						,_Fld17192
						,_Fld17193
						,_Fld17195RRef
						,_Fld17196RRef
						,_Fld17197RRef
						,_Fld17198
						,_Fld17199RRef
						,_Fld17200RRef
						,_Fld17201RRef
						,_Fld17202RRef
						,_Fld17203
						,_Fld17204RRef
						,_Fld17205
						,_Fld17206
						,_Fld17207RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@АдресЭлектроннойПочты
						,@Важность
						,@ВидОбъекта
						,@ВидСобытия
						,@ВремяНапоминания
						,@ИсточникИнформацииПриОбращении
						,@Комментарий
						,@НапомнитьОСобытии
						,@НачалоСобытия
						,@ОкончаниеСобытия
						,@ОписаниеСобытия
						,@Ответственный
						,@Помещение
						,@Проект
						,@СодержаниеСобытия
						,@СостояниеСобытия
						,@Территория
						,@ТипСобытия
						,@ГруппаСобытия
						,@ЕстьВложения
						,@КонтактноеЛицоБезКонтрагента
						,@ИнтервалНапоминания
						,@ПредметКонтакта
						,@ЗаявкаКандидата)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document588
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17181	= @АдресЭлектроннойПочты
						,_Fld17182RRef	= @Важность
						,_Fld17183RRef	= @ВидОбъекта
						,_Fld17184RRef	= @ВидСобытия
						,_Fld17185	= @ВремяНапоминания
						,_Fld17186RRef	= @ИсточникИнформацииПриОбращении
						,_Fld17187	= @Комментарий
						,_Fld17190	= @НапомнитьОСобытии
						,_Fld17191	= @НачалоСобытия
						,_Fld17192	= @ОкончаниеСобытия
						,_Fld17193	= @ОписаниеСобытия
						,_Fld17195RRef	= @Ответственный
						,_Fld17196RRef	= @Помещение
						,_Fld17197RRef	= @Проект
						,_Fld17198	= @СодержаниеСобытия
						,_Fld17199RRef	= @СостояниеСобытия
						,_Fld17200RRef	= @Территория
						,_Fld17201RRef	= @ТипСобытия
						,_Fld17202RRef	= @ГруппаСобытия
						,_Fld17203	= @ЕстьВложения
						,_Fld17204RRef	= @КонтактноеЛицоБезКонтрагента
						,_Fld17205	= @ИнтервалНапоминания
						,_Fld17206	= @ПредметКонтакта
						,_Fld17207RRef	= @ЗаявкаКандидата
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочты", АдресЭлектроннойПочты);
					Команда.Parameters.AddWithValue("Важность", Важность.Ключ());
					Команда.Parameters.AddWithValue("ВидОбъекта", ВидОбъекта.Ключ());
					Команда.Parameters.AddWithValue("ВидСобытия", ВидСобытия.Ключ());
					Команда.Parameters.AddWithValue("ВремяНапоминания", ВремяНапоминания);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НапомнитьОСобытии", НапомнитьОСобытии);
					Команда.Parameters.AddWithValue("НачалоСобытия", НачалоСобытия);
					Команда.Parameters.AddWithValue("ОкончаниеСобытия", ОкончаниеСобытия);
					Команда.Parameters.AddWithValue("ОписаниеСобытия", ОписаниеСобытия);
					Команда.Parameters.AddWithValue("СодержаниеСобытия", СодержаниеСобытия);
					Команда.Parameters.AddWithValue("СостояниеСобытия", СостояниеСобытия.Ключ());
					Команда.Parameters.AddWithValue("ТипСобытия", ТипСобытия.Ключ());
					Команда.Parameters.AddWithValue("ЕстьВложения", ЕстьВложения);
					Команда.Parameters.AddWithValue("ИнтервалНапоминания", ИнтервалНапоминания);
					Команда.Parameters.AddWithValue("ПредметКонтакта", ПредметКонтакта);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document588
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}