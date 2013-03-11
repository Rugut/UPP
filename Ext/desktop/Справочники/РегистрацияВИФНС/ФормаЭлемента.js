Ext.define('Справочники.РегистрацияВИФНС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 382,width: 480,
	iconCls: 'bogus',
	title: 'Регистрация в ИФНС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:144px;top:60px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:144px;top:137px;width:328px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:25px;',
			items:
			[
				{
					text:'Действие',
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
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:357px;width:480px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:218px;top:60px;width:198px;height:19px;',
			height: 19,width: 198,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:106px;top:0px;width:92px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кра��коеНаименование',
			style: 'position:absolute;left:144px;top:109px;width:328px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:210px;width:458px;height:115px;',
			height: 115,width: 458,
			items:
			[
				{
					title:'ПредставительЮрЛицо',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПредставителя',
			style: 'position:absolute;left:130px;top:33px;width:328px;height:82px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УполномоченноеЛицоПредставителя',
			style: 'position:absolute;left:130px;top:5px;width:328px;height:19px;',
		},
					]
				},
				{
					title:'ПредставительФизЛицо',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПредставителя1',
			style: 'position:absolute;left:130px;top:9px;width:328px;height:106px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представитель',
			style: 'position:absolute;left:144px;top:187px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:144px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Доверенность',
			style: 'position:absolute;left:144px;top:330px;width:328px;height:19px;',
		},
	]
});