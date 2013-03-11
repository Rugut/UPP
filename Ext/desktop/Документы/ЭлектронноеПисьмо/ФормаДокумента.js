Ext.define('Документы.ЭлектронноеПисьмо.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 441,width: 660,
	iconCls: 'bogus',
	title: 'Электронное письмо',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ФорматТекстаПростойТекст',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВвестиСобытие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'ИзменитьФорматТекста',
				},
				{
					text:'РедактироватьВнешнимХТМЛРедактором',
				},
				{
					text:'Действие4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПроверитьПолучателей',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПроверитьПолучателей',
				},
				{
					text:'Отправить',
				},
				{
					text:'ФорматТекстаHTML',
				},
				{
					text:'СоздатьОпрос',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СкрытыеКопии',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кому',
			style: 'position:absolute;left:102px;top:57px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'ВосстановитьИсходныйТекст',
				},
				{
					text:'Редактирование',
				},
				{
					text:'Действие4',
				},
				{
					text:'Удалить',
				},
				{
					text:'ПоказатьЗаголовокПисьма',
				},
				{
					text:'Ответить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВвестиСобытие',
				},
				{
					text:'АдреснаяКнига',
				},
				{
					text:'Действие',
				},
				{
					text:'Ответить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Переслать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'Переслать',
				},
				{
					text:'Действие1',
				},
				{
					text:'СоздатьОпрос',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'АдреснаяКнига',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Копии',
			style: 'position:absolute;left:102px;top:81px;width:552px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:105px;width:647px;height:24px;',
			height: 24,width: 647,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкрытыеКопии',
			style: 'position:absolute;left:95px;top:0px;width:552px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тема',
			style: 'position:absolute;left:102px;top:129px;width:552px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:176px;width:647px;height:261px;',
			height: 261,width: 647,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'ОткрытьСсылку',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаУчетнойЗаписи',
			style: 'position:absolute;left:101px;top:6px;width:277px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:101px;top:212px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:101px;top:190px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтправления',
			style: 'position:absolute;left:488px;top:83px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:488px;top:59px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:488px;top:6px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:101px;top:166px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаТранспорта',
			style: 'position:absolute;left:488px;top:107px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предмет',
			style: 'position:absolute;left:101px;top:31px;width:538px;height:19px;',
		},
					]
				},
				{
					title:'ВложенияСохраненные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'ОткрытьФайлы',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОткрытьФайлы',
				},
			]
		},
					]
				},
				{
					title:'ВложенияНовые',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'ОткрытьФайлы',
				},
				{
					text:'ОткрытьФайлы',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отправитель',
			style: 'position:absolute;left:102px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РассмотретьПосле',
			style: 'position:absolute;left:222px;top:153px;width:150px;height:19px;',
		},
	]
});