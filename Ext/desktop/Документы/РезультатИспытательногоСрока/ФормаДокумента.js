Ext.define('Документы.РезультатИспытательногоСрока.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 312,width: 699,
	iconCls: 'bogus',
	title: 'Результат испытательного срока',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:461px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:571px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:201px;width:683px;height:78px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:461px;top:57px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:104px;top:33px;width:247px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:356px;top:104px;width:100px;height:19px;',
		},
	]
});