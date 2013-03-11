Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 454,
	iconCls: 'bogus',
	title: 'Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:365px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:143px;width:438px;height:160px;',
			height: 160,width: 438,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Счет',
				},
				{
					text:'НаименованиеСчета',
				},
				{
					text:'ВидОстатка',
				},
				{
					text:'Знак',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:454px;height:25px;',
			items:
			[
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
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:119px;width:438px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:25px;',
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
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
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
					text:'Разделитель1',
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
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:352px;height:38px;',
		},
	]
});