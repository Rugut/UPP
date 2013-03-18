Ext.define('Справочники.Регионы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:506px;height:232px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регионы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:58px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:90px;top:58px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:106px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:106px;width:406px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:207px;width:504px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Входит в:',
			style: 'position:absolute;left:8px;top:34px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:90px;top:34px;width:406px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:154px;width:79px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:154px;width:406px;height:45px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Код региона:',
			style: 'position:absolute;left:8px;top:82px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование1',
			style: 'position:absolute;left:90px;top:82px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Код адресного элемента:',
			style: 'position:absolute;left:149px;top:58px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодАдресногоЭлемента',
			style: 'position:absolute;left:288px;top:58px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЖДСтанцияНазначения',
			text: 'Ж/Д станция:',
			style: 'position:absolute;left:8px;top:130px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЖДСтанцияНазначения',
			style: 'position:absolute;left:90px;top:130px;width:406px;height:19px;',
		},
	]
});