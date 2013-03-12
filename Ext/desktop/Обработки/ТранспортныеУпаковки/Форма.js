Ext.define('Обработки.ТранспортныеУпаковки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать штрихкодов транспортных упаковок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Печать',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументы',
			text: 'Документы:',
			style: 'position:absolute;left:8px;top:54px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документы',
			style: 'position:absolute;left:76px;top:54px;width:496px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:103px;width:564px;height:25px;',
			items:
			[
				{
					text:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Заполнить всеми позициями',
				},
				{
					text:'Заполнить позициями, имеющими транспортные упаковки',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:564px;height:230px;',
			height: 230,width: 564,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Обрабатывать',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Ед. Изм.',
					width:'76',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Серия номенклатуры',
					width:'250',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Упаковка',
					width:'250',
				},
				{
					text:'Количество',
					width:'100',
				},
			]
		},
	]
});