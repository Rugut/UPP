Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:793px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:611px;height:259px;',
			height: 259,width: 611,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Наименование',
					width:'107',
				},
				{
					text:'Тип цен',
					width:'114',
				},
				{
					text:'Новый док.',
					width:'80',
				},
				{
					text:'Автоматич.',
					width:'75',
				},
				{
					text:'Упр.',
					width:'32',
				},
				{
					text:'Регл.',
					width:'33',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:793px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'159',
				},
			]
		},
	]
});