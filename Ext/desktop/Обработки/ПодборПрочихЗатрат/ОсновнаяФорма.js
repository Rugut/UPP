Ext.define('Обработки.ПодборПрочихЗатрат.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор прочих затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:489px;height:156px;',
			height: 156,width: 489,
			columns:
			[
				{
					text:'Статьи затрат',
					width:'567',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:245px;width:489px;height:197px;',
			height: 197,width: 489,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'250',
				},
				{
					text:'Остаток',
					width:'78',
				},
				{
					text:'Остаток (регл.)',
					width:'76',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:8px;width:113px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:121px;top:8px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:416px;top:8px;width:81px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:28px;width:113px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:121px;top:32px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипУчета',
			text: 'Остатки по данным:',
			style: 'position:absolute;left:8px;top:56px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Остатки на дату:',
			style: 'position:absolute;left:318px;top:56px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:416px;top:56px;width:81px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Упр. учета',
			style: 'position:absolute;left:121px;top:56px;width:75px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регл. учета',
			style: 'position:absolute;left:202px;top:56px;width:79px;height:19px;',
		},
	]
});