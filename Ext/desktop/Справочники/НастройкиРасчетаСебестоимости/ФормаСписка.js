Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:726px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки расчета себестоимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:544px;height:259px;',
			height: 259,width: 544,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'113',
				},
				{
					text:'Организация',
					width:'128',
				},
				{
					text:'Настройка закрытия месяца',
					width:'160',
				},
				{
					text:'Автоматич.',
					width:'65',
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
					width:'111',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:726px;height:25px;',
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