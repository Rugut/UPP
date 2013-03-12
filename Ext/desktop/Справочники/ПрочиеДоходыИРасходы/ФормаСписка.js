Ext.define('Справочники.ПрочиеДоходыИРасходы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прочие доходы и расходы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:599px;height:280px;',
			height: 280,width: 599,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'64',
				},
				{
					text:'Наименование',
					width:'250',
				},
				{
					text:'Вид прочих дох. и расх.',
					width:'250',
				},
				{
					text:'Принятие к налоговому учету',
					width:'60',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
	]
});