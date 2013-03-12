Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Источники данных для расчетов бюджетирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Данные',
					width:'220',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:694px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выбрать',
				},
			]
		},
	]
});