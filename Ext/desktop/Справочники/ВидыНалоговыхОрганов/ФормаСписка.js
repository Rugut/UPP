Ext.define('Справочники.ВидыНалоговыхОрганов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:538px;height:259px;',
			height: 259,width: 538,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'300',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});