Ext.define('Справочники.ФизическиеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 608,
	iconCls: 'bogus',
	title: 'Физическое лицо',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'ПерейтиАвансыОрганизаций',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Перейти',
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
					text:'Файлы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Труд',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПерейтиАвансы',
				},
				{
					text:'Труд',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'ПерейтиЛицевыеСчета',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПерейтиЛицевыеСчета',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:608px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:592px;height:361px;',
			height: 361,width: 592,
			items:
			[
				{
					title:'СтраницаОсновные',
				},
				{
					title:'СтраницаПерсональные',
				},
				{
					title:'УченыеСтепениЗвания',
				},
				{
					title:'Награды',
				},
				{
					title:'СтраницаДополнительные',
				},
				{
					title:'Прочее',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:48px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:48px;top:57px;width:182px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:486px;top:57px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:236px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:362px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:81px;width:502px;height:19px;',
		},
	]
});