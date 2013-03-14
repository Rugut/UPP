Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:249px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:483px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:467px;height:185px;',
			height: 185,width: 467,
			items:
			[
				{
					title:'Базовые начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			items:
			[
				{
					text:'Дополнительные начисления организаций',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:129px;',
			height: 129,width: 453,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид расчета',
					width:'168',
				},
			]
		},
					]
				},
				{
					title:'Размеры отчислений',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:25px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:453px;height:128px;',
			height: 128,width: 453,
			columns:
			[
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Организация',
					width:'240',
				},
				{
					text:'Размер (%)',
					width:'60',
				},
				{
					text:'Резерв',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:7px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
	]
});