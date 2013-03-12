Ext.define('Обработки.КалендарныйПланЗакупок.ФормаНастройкиСоответствийЗаказовПокупателейИПоставщиков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник настройки соответствий заказов покупателей и заказов поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:780px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Отмена',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:151px;top:33px;width:621px;height:364px;',
			height: 364,width: 621,
			columns:
			[
				{
					text:'Номенклатура/Дата потребности/Заказ покупателя/Заказ поставщику',
					width:'380',
				},
				{
					text:'Заказчик/Поставщик',
					width:'120',
				},
				{
					text:'Количество потребности',
					width:'120',
				},
				{
					text:'Количество заказов',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьУровеньРазворотаДерева',
			text: 'Уровень разворота дерева:',
			style: 'position:absolute;left:446px;top:12px;width:144px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:151px;top:9px;width:270px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Настройка отбора',
				},
				'-',
				{
					text:'Автокорректировка',
				},
				{
					text:'Отключить отбор',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:138px;height:388px;',
			height: 388,width: 138,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});