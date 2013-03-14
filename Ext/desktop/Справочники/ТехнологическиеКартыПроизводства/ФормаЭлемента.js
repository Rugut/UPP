Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические карты производства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:546px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:588px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:446px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:98px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУтверждения',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:220px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:322px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:644px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:644px;height:226px;',
			height: 226,width: 644,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'№ операции',
					width:'100',
				},
				{
					text:'Рабочий центр (подготов.)',
					width:'240',
				},
				{
					text:'Тех. операция (подготов.)',
					width:'140',
				},
				{
					text:'Ед.',
					width:'44',
				},
				{
					text:'К',
					width:'41',
				},
				{
					text:'Время (подготов.)',
					width:'100',
				},
				{
					text:'Рабочий центр (выполн.)',
					width:'490',
				},
				{
					text:'Тех. операция (выполн.)',
					width:'140',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'К',
					width:'33',
				},
				{
					text:'Время (выполн.)',
					width:'100',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Следующие операции',
					width:'120',
				},
				{
					text:'Перенос',
					width:'50',
				},
				{
					text:'Рабочий центр (заключ.)',
					width:'240',
				},
				{
					text:'Тех. операция (заключ.)',
					width:'140',
				},
				{
					text:'Ед.',
					width:'37',
				},
				{
					text:'К',
					width:'33',
				},
				{
					text:'Время (заключ.)',
					width:'92',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:660px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});