Ext.define('Документы.УчетПоложенийПереходногоПериодаПоНДС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:540px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет положений переходного периода по НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:524px;height:280px;',
			height: 280,width: 524,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'226',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Выбрать',
				},
			]
		},
	]
});