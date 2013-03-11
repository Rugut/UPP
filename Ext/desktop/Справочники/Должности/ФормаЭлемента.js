Ext.define('Справочники.Должности.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 446,
	iconCls: 'bogus',
	title: 'Должность',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:33px;width:212px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:446px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:446px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:430px;height:334px;',
			height: 334,width: 430,
			items:
			[
				{
					title:'ОписаниеДолжности',
				},
				{
					title:'Компетенции',
				},
			]
		},
	]
});