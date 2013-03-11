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
				},
				{
					title:'Дополнительно',
				},
				{
					title:'ВложенияСохраненные',
				},
				{
					title:'ВложенияНовые',
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