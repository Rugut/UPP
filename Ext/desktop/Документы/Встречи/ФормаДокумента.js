Ext.define('Документы.Встречи.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 675,
	iconCls: 'bogus',
	title: 'Встреча',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:675px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:300px;top:394px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:116px;top:394px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:495px;top:394px;width:172px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:659px;height:226px;',
			height: 226,width: 659,
			items:
			[
				{
					title:'Встреча',
				},
				{
					title:'Планирование',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:58px;top:63px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Продолжительность',
			style: 'position:absolute;left:331px;top:33px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРезервирования',
			style: 'position:absolute;left:58px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНачала',
			style: 'position:absolute;left:192px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаявкаКандидата',
			style: 'position:absolute;left:495px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодобратьСвободноеПомещение',
			text: 'Подобрать свободное помещение',
			style: 'position:absolute;left:257px;top:63px;width:123px;height:36px;',
		},
	]
});