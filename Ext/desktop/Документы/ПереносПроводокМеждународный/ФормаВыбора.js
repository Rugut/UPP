Ext.define('Документы.ПереносПроводокМеждународный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:528px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос проводок (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:380px;',
			height: 380,width: 512,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Перейти',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});