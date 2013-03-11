Ext.define('Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатков',
	{
	extend: 'Ext.window.Window',
	height: 297,width: 477,
	iconCls: 'bogus',
	title: 'Остатки отпусков прошлых лет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			items:
			[
				{
					text:'РассчитатьОстаткиОтпусков',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НастроитьАвтоматическийРасчет',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:225px;height:256px;',
			height: 256,width: 225,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Физлицо',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:239px;top:123px;width:230px;height:140px;',
			height: 140,width: 230,
			columns:
			[
				{
					text:'ГодРаботы',
				},
				{
					text:'ДатаНачалаРабочегоГода',
				},
				{
					text:'ДатаОкончанияРабочегоГода',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Изменить',
			text: 'Изменить',
			style: 'position:absolute;left:239px;top:268px;width:101px;height:21px;',
		},
	]
});