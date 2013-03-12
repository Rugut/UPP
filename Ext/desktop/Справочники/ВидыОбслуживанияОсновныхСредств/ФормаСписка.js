Ext.define('Справочники.ВидыОбслуживанияОсновныхСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды обслуживания основных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:320px;',
			height: 320,width: 400,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
	]
});