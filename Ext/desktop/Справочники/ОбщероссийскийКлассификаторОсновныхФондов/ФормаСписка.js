Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:769px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор основных фондов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:196px;top:33px;width:565px;height:280px;',
			height: 280,width: 565,
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
					width:'193',
				},
				{
					text:'Контрольное число',
					width:'34',
				},
				{
					text:'Амортизационная группа',
					width:'100',
				},
				{
					text:'Наименование группировки',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			items:
			[
				'-',
				{
					text:'Загрузить классификатор',
				},
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