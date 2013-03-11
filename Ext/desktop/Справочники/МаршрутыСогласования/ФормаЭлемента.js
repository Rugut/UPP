Ext.define('Справочники.МаршрутыСогласования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 319,width: 428,
	iconCls: 'bogus',
	title: 'Этап согласования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:428px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:108px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:108px;top:57px;width:312px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:134px;width:412px;height:152px;',
			height: 152,width: 412,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Пользователь',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:110px;width:412px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});