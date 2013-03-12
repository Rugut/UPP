Ext.define('Документы.РегистрацияОплатыНДСВБюджет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:627px;height:337px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрации оплаты НДС в бюджет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:611px;height:296px;',
			height: 296,width: 611,
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
					text:'Ответственный',
					width:'130',
				},
				{
					text:'Комментарий',
					width:'167',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});