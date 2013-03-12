Ext.define('Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:316px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Порядок присвоения серийных номеров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:487px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:527px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:584px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:584px;height:137px;',
			height: 137,width: 584,
			columns:
			[
				{
					text:'Номер разряда',
					width:'86',
				},
				{
					text:'Источник',
					width:'211',
				},
				{
					text:'Значение / свойство',
					width:'114',
				},
				{
					text:'Тип разряда',
					width:'75',
				},
				{
					text:'Размер разряда',
					width:'91',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:291px;width:600px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПримерСерийногоНомера',
			text: 'Пример серийного номера:',
			style: 'position:absolute;left:8px;top:240px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПримерСерийногоНомера',
			style: 'position:absolute;left:157px;top:240px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:264px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:264px;width:503px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЗнаков',
			text: 'Кол-во знаков:',
			style: 'position:absolute;left:424px;top:240px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:514px;top:240px;width:78px;height:19px;',
		},
	]
});