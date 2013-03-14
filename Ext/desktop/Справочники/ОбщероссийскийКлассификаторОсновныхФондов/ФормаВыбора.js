Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:684px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор основных фондов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:196px;top:33px;width:480px;height:280px;',
			height: 280,width: 480,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Амортизационная группа',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:684px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:182px;height:280px;',
			height: 280,width: 182,
			columns:
			[
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
	]
});