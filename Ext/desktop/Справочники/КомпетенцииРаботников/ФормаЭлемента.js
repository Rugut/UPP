Ext.define('Справочники.КомпетенцииРаботников.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 428,width: 406,
	iconCls: 'bogus',
	title: 'Компетенция сотрудника',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:117px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:406px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:390px;height:313px;',
			height: 313,width: 390,
			items:
			[
				{
					title:'ОписаниеКомпетенции',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеКомпетенции',
			style: 'position:absolute;left:6px;top:6px;width:376px;height:281px;',
		},
					]
				},
				{
					title:'ОценкаКомпетенции',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШкалаОценок',
			style: 'position:absolute;left:96px;top:6px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТиповаяАнкета',
			style: 'position:absolute;left:96px;top:30px;width:286px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:84px;width:376px;height:203px;',
			height: 203,width: 376,
			columns:
			[
				{
					text:'Оценка',
				},
				{
					text:'ПриоритетОценки',
				},
				{
					text:'ВесОценки',
				},
				{
					text:'ОписаниеОценки',
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
			name: 'Родитель',
			style: 'position:absolute;left:117px;top:58px;width:281px;height:19px;',
		},
	]
});