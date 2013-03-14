Ext.define('Обработки.ПодборМатериаловИАналогов.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:722px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор материалов и аналогов для выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:706px;height:255px;',
			height: 255,width: 706,
			columns:
			[
				{
					text:'Продукция / материал / аналог',
					width:'182',
				},
				{
					text:'Характеристика',
					width:'89',
				},
				{
					text:'Спецификация',
					width:'82',
				},
				{
					text:'№ операции',
					width:'54',
				},
				{
					text:'Используется для выпуска',
					width:'34',
				},
				{
					text:'Норматив',
					width:'60',
				},
				{
					text:'Количество',
					width:'60',
				},
				{
					text:'Всего',
					width:'60',
				},
				{
					text:'Единица',
					width:'45',
				},
				{
					text:'Приоритет',
					width:'59',
				},
				{
					text:'Коэффициент',
					width:'74',
				},
				{
					text:'Статья затрат',
					width:'77',
				},
				{
					text:'ВидВыпуска',
					width:'67',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Заказ выпуска',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:722px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:706px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Автозамена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Склад остатков:',
			style: 'position:absolute;left:8px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОстатков',
			style: 'position:absolute;left:101px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:315px;width:706px;height:95px;',
			height: 95,width: 706,
			columns:
			[
				{
					text:'Материал',
					width:'100',
				},
				{
					text:'Характеристика',
					width:'100',
				},
				{
					text:'Свободный остаток (на складе и в производстве)',
					width:'100',
				},
				{
					text:'Ед.',
					width:'45',
				},
			]
		},
	]
});