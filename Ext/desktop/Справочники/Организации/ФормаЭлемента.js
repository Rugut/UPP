Ext.define('Справочники.Организации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 669,width: 579,
	iconCls: 'bogus',
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:507px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:134px;top:33px;width:332px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Префикс',
			style: 'position:absolute;left:279px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:579px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Права',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие4',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:644px;width:579px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГоловнаяОрганизация',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:134px;top:81px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойБанковскийСчет',
			style: 'position:absolute;left:134px;top:304px;width:437px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:331px;width:563px;height:305px;',
			height: 305,width: 563,
			items:
			[
				{
					title:'Основные',
				},
				{
					title:'КонтактнаяИнформация',
				},
				{
					title:'Коды',
				},
				{
					title:'РасчетЗарплаты',
				},
				{
					title:'ИндивидуальныйПредприниматель',
				},
				{
					title:'БухучетЗарплаты',
				},
				{
					title:'ИностраннаяОрганизация',
				},
				{
					title:'Документооборот',
				},
				{
					title:'Прочее',
				},
				{
					title:'Свойства',
				},
				{
					title:'Категории',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПлательщикаПриПеречисленииНалогов',
			style: 'position:absolute;left:134px;top:209px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:134px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндивидуальныйПредприниматель',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеСокращенное',
			style: 'position:absolute;left:134px;top:152px;width:437px;height:34px;',
		},
	]
});