Ext.define('Отчеты.КнигаПокупок1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:575px;height:219px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:194px;width:575px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:32px;top:131px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту:',
			style: 'position:absolute;left:32px;top:107px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:183px;top:107px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Скрыть колонки по ставке 20%',
			style: 'position:absolute;left:8px;top:6px;width:178px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить покупателей по счетам-фактурам на полученные авансы',
			style: 'position:absolute;left:32px;top:155px;width:381px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:89px;top:28px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:28px;width:78px;height:19px;',
		},
	]
});