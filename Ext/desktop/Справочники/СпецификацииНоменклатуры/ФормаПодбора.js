Ext.define('Справочники.СпецификацииНоменклатуры.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:560px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:544px;height:242px;',
			height: 242,width: 544,
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
					text:'Версия',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Активная',
					width:'23',
				},
				{
					text:'Вид',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:544px;height:110px;',
			height: 110,width: 544,
			columns:
			[
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Количество',
			style: 'position:absolute;left:14px;top:420px;width:82px;height:15px;',
		},
	]
});