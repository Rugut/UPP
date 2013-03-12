Ext.define('Документы.ВыработкаНМА.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:564px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выработка НМА',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:548px;height:380px;',
			height: 380,width: 548,
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
					width:'102',
				},
				{
					text:'Проведен',
					width:'0',
				},
				{
					text:'Ответственный',
					width:'259',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:564px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});