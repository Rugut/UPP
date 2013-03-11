Ext.define('Справочники.ВидыОбслуживанияОсновныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 484,
	iconCls: 'bogus',
	title: 'Виды обслуживания основных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:468px;height:320px;',
			height: 320,width: 468,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});