Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 338,width: 406,
	iconCls: 'bogus',
	title: 'Детализация аналитического баланса',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:179px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:406px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:390px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:390px;height:160px;',
			height: 160,width: 390,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:40px;',
		},
	]
});