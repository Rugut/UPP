Ext.define('Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:477px;height:297px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков прошлых лет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			items:
			[
				{
					text:'Заполнить остатки отпусков',
				},
				'-',
				{
					text:'Настроить автоматическое заполнение...',
				},
				'-',
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
					width:'131',
				},
				{
					text:'Физлицо',
					width:'350',
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
					text:'Год работы',
					width:'100',
				},
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Количество дней',
					width:'70',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:239px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаток',
			text: 'Остатки отпуска заполнены. Программа будет рассчитывать остатки для всех рабочих лет, следующих за последним рабочим годом, на который заполнены остатки',
			style: 'position:absolute;left:239px;top:56px;width:230px;height:67px;',
		},
		{
			xtype: 'button',
			name: 'Изменить',
			text: 'Изменить',
			style: 'position:absolute;left:239px;top:268px;width:101px;height:21px;',
		},
	]
});